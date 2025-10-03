import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY || 'dummy-key-for-build')

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Naam, e-mail en bericht zijn verplicht' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Ongeldig e-mailadres' },
        { status: 400 }
      )
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'noreply@websites-tools.nl',
      to: [process.env.TO_EMAIL || 'joostvlanschot@gmail.com'],
      subject: `Nieuw contactformulier bericht van ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0ea5e9;">Nieuw contactformulier bericht</h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1f2937;">Contactgegevens</h3>
            <p><strong>Naam:</strong> ${name}</p>
            <p><strong>E-mail:</strong> ${email}</p>
            ${company ? `<p><strong>Bedrijf:</strong> ${company}</p>` : ''}
          </div>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1f2937;">Bericht</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
            <p>Dit bericht is verzonden via het contactformulier op websites-tools.nl</p>
            <p>Verzonden op: ${new Date().toLocaleString('nl-NL')}</p>
          </div>
        </div>
      `,
      text: `
        Nieuw contactformulier bericht
        
        Naam: ${name}
        E-mail: ${email}
        ${company ? `Bedrijf: ${company}` : ''}
        
        Bericht:
        ${message}
        
        Verzonden op: ${new Date().toLocaleString('nl-NL')}
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Er is een fout opgetreden bij het verzenden van het bericht' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Bericht succesvol verzonden', id: data?.id },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Er is een onverwachte fout opgetreden' },
      { status: 500 }
    )
  }
}
