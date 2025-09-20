import * as React from 'react';

interface WelcomeEmailProps {
  userRole: string;
}

export const WelcomeEmail: React.FC<WelcomeEmailProps> = ({ userRole }) => {
  // Convert role to readable format
  const getRoleDescription = (role: string) => {
    switch (role.toLowerCase()) {
      case 'creative-writer':
        return 'creative writing';
      case 'professional-writer':
        return 'professional writing';
      case 'academic-writer':
        return 'academic writing';
      case 'therapist':
        return 'therapeutic writing';
      case 'daily-journaler':
        return 'personal journaling';
      default:
        return role.toLowerCase();
    }
  };

  return (
    <div style={{
      fontFamily: '"Montserrat", Arial, sans-serif',
      maxWidth: '600px',
      margin: '0 auto',
      backgroundColor: '#1C150B',
      color: '#F4E7D1',
      lineHeight: '1.6'
    }}>
      {/* Header */}
      <div style={{
        backgroundColor: '#1C150B',
        padding: '40px 20px',
        textAlign: 'center' as const,
        borderBottom: '1px solid rgba(152,131,97,0.3)'
      }}>
        <h1 style={{
          fontFamily: '"Avigea", Georgia, serif',
          fontSize: '42px',
          color: '#F4E7D1',
          margin: '0 0 10px 0',
          fontWeight: 'normal',
          letterSpacing: '1px'
        }}>
          Escribo AI
        </h1>
        <p style={{
          color: '#988361',
          fontSize: '16px',
          fontStyle: 'italic',
          margin: '0'
        }}>
          Helping every writer bring ideas to life
        </p>
      </div>

      {/* Main content area */}
      <div style={{
        backgroundColor: '#F4E7D1',
        padding: '40px 30px',
        color: '#53442D'
      }}>
        {/* Welcome message */}
        <div style={{
          textAlign: 'center' as const,
          marginBottom: '30px'
        }}>
          <h2 style={{
            fontFamily: '"Avigea", Georgia, serif',
            fontSize: '32px',
            color: '#A16631',
            margin: '0 0 15px 0',
            fontWeight: 'normal'
          }}>
            Welcome to Our Writing Revolution
          </h2>
          <div style={{
            width: '120px',
            height: '2px',
            backgroundColor: '#988361',
            margin: '0 auto',
            opacity: 0.7
          }}></div>
        </div>

        {/* Personal greeting */}
        <div style={{
          backgroundColor: 'white',
          padding: '30px',
          borderRadius: '12px',
          border: '3px solid #988361',
          marginBottom: '25px',
          boxShadow: '0 4px 15px rgba(83, 68, 45, 0.15)'
        }}>
          <p style={{
            fontSize: '18px',
            marginBottom: '20px',
            color: '#53442D'
          }}>
            Hello there,
          </p>

          <p style={{
            fontSize: '16px',
            marginBottom: '20px',
            color: '#53442D'
          }}>
            Thank you for joining the Escribo AI waitlist! As a <strong>{getRoleDescription(userRole)}</strong> enthusiast, you&apos;ll be among the first to experience how Escribo AI transforms writing from chaotic to organized.
          </p>
        </div>

        {/* What's next section */}
        <div style={{
          backgroundColor: 'rgba(161, 102, 49, 0.08)',
          padding: '25px',
          borderRadius: '12px',
          border: '2px dashed #988361',
          marginBottom: '25px'
        }}>
          <h3 style={{
            fontFamily: '"Avigea", Georgia, serif',
            color: '#A16631',
            fontSize: '20px',
            margin: '0 0 12px 0',
            fontWeight: 'normal'
          }}>
            What&apos;s Next?
          </h3>
          <p style={{
            color: '#53442D',
            margin: '0',
            fontSize: '16px'
          }}>
            We&apos;re working hard on the release and will notify you as soon as it&apos;s ready!
          </p>
        </div>

        {/* Inspirational quote */}
        <div style={{
          textAlign: 'center' as const,
          padding: '25px',
          backgroundColor: 'rgba(152, 131, 97, 0.1)',
          borderRadius: '12px',
          marginBottom: '25px',
          borderLeft: '4px solid #A16631'
        }}>
          <p style={{
            fontSize: '18px',
            fontStyle: 'italic',
            color: '#988361',
            margin: '0',
            lineHeight: '1.8'
          }}>
            &ldquo;Writing a book can feel like chaos—messy notes, half-finished drafts, and moments of staring at a blank page. Escribo AI turns that chaos into clarity.&rdquo;
          </p>
        </div>

        <p style={{
          fontSize: '16px',
          color: '#53442D',
          textAlign: 'center' as const
        }}>
          Keep writing—easier, organized writing is just around the corner!
        </p>
      </div>

      {/* Footer */}
      <div style={{
        backgroundColor: '#1C150B',
        padding: '30px 20px',
        textAlign: 'center' as const
      }}>
        {/* Simple divider */}
        <div style={{
          width: '100px',
          height: '1px',
          backgroundColor: '#988361',
          margin: '0 auto 20px auto',
          opacity: '0.6'
        }}></div>

        <p style={{
          color: '#988361',
          fontSize: '16px',
          margin: '0 0 10px 0'
        }}>
          Best regards,<br />
          <strong style={{ color: '#F4E7D1' }}>The Escribo AI Team</strong>
        </p>
        
        <p style={{
          color: '#988361',
          fontSize: '12px',
          margin: '20px 0 0 0',
          opacity: 0.8
        }}>
          We respect your privacy and will never spam you.
        </p>
      </div>
    </div>
  );
};
