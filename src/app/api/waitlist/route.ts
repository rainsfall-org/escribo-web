import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { render } from '@react-email/render';
import React from 'react';
import { WelcomeEmail } from '../../../emails/welcome-template';

const resend = new Resend('re_55sYfApH_PLzo5uGgr6U1xdpkERRrRoGG');

export async function POST(request: NextRequest) {
  try {
    const { email, role } = await request.json();

    // Validate input
    if (!email || !role) {
      return NextResponse.json(
        { error: 'Email and role are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Send notification email to the team
    const teamNotification = await resend.emails.send({
      from: 'support@escribo.ai',
      to: 'support@escribo.ai',
      subject: 'New Waitlist Signup - Escribo AI',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4e7d1; border-radius: 10px; border: 2px solid #988361;">
          <h2 style="color: #53442d; text-align: center; font-size: 28px; margin-bottom: 20px;">
            New Waitlist Signup!
          </h2>

          <div style="background-color: white; padding: 20px; border-radius: 8px; border: 1px solid #988361; margin: 20px 0;">
            <h3 style="color: #a16631; margin-bottom: 15px;">Contact Details:</h3>
            <p style="margin: 8px 0; color: #53442d;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 8px 0; color: #53442d;"><strong>Role:</strong> ${role}</p>
            <p style="margin: 8px 0; color: #53442d;"><strong>Signup Time:</strong> ${new Date().toLocaleString()}</p>
          </div>

          <div style="text-align: center; margin-top: 20px;">
            <p style="color: #988361; font-size: 14px;">
              Another writer is excited to join the Escribo AI community!
            </p>
          </div>
        </div>
      `,
    });

    // Send welcome email to the user
    const welcomeEmailHtml = await render(React.createElement(WelcomeEmail, { userRole: role }));
    const welcomeEmail = await resend.emails.send({
      from: 'support@escribo.ai',
      to: email,
      subject: 'Welcome to the Escribo AI Waitlist',
      html: welcomeEmailHtml,
    });

    console.log('Team notification sent:', teamNotification.data?.id);
    console.log('Welcome email sent:', welcomeEmail.data?.id);

    return NextResponse.json(
      {
        message: 'Successfully joined waitlist',
        teamNotificationId: teamNotification.data?.id,
        welcomeEmailId: welcomeEmail.data?.id
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Waitlist signup error:', error);

    return NextResponse.json(
      { error: 'Failed to process waitlist signup' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Waitlist API is working' },
    { status: 200 }
  );
}