# Emergency Blood Alert System

A Next.js application that sends emergency blood requirement alerts via Gmail SMTP. The system uses Nodemailer for sending high-priority email notifications.

## Current Implementation

### Frontend (`app/page.js`)
- Single-page interface with emergency alert button
- Real-time status updates
- Responsive design using Tailwind CSS
- Client-side error handling

### Backend (`app/api/send-email/route.js`)
- SMTP email service using Nodemailer
- Gmail SMTP configuration
- High-priority email headers
- Detailed error logging
- Connection verification

### Environment Configuration
Currently using Gmail SMTP with the following configuration in `.env.local`:
```env
EMAIL_USER=testbloodbond@gmail.com
EMAIL_PASS=[App-specific password]
```

## Setup

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file with your Gmail credentials:
```env
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-app-specific-password
```

4. Run the development server:
```bash
npm run dev
```


## Technical Details

- **Framework**: Next.js
- **Email Service**: Nodemailer with Gmail SMTP
- **SMTP Configuration**:
  - Host: smtp.gmail.com
  - Port: 465
  - Secure: true
- **Styling**: Tailwind CSS
- **API**: Next.js Route Handlers

## Security Notes

- The application uses Gmail App-specific passwords
- Environment variables are properly secured
- SMTP connection uses secure port 465
