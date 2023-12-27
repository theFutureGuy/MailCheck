# MailCheck

[check it out now](https://mail-check-3.vercel.app)

**Concerned about whether your important emails have been read or not? Fret not, introducing MailCheck!**

## Overview

**MailCheck** is an open-source project licensed under MIT, offering a simple yet effective solution to determine the status of your sent emails. Designed with user privacy in mind, MailCheck ensures that your emails are tracked without compromising your data. We prioritize your privacy by avoiding the need for full email read/write access.

## Technology Stack

MailCheck employs a straightforward tech stack, leveraging only a few technologies:

- **React**: Powering the frontend for a seamless user experience.
- **Nhost**: Serving as the backend for user authentication, database management, hosting, and serverless functions. Think of Nhost as an open-source alternative to Firebase, utilizing GraphQL.

## How It Works

Let's walk through the process of using MailCheck:

1. **Account Creation**: Begin by creating your MailCheck account, a crucial step to access your personalized dashboard.

2. **Dashboard Overview**: Once logged in, your dashboard displays a comprehensive list of sent emails, complete with detailed status information.

3. **Compose and Track**: Click on the "Compose" button to initiate the process of tracking a new email. Instead of sending emails directly, MailCheck provides you with a unique 1x1 transparent pixel image. Copy and paste this pixel into your email client before filling out additional information about the email for future reference. Save the details.

4. **Check Status**: After sending your email, head back to your dashboard to view the status. The status will be either "Seen" or "Unseen," indicating whether the recipient has opened your email.

5. **Pixel Tracking Method**: MailCheck utilizes a pixel tracking method, where the recipient's request to open the email triggers a serverless function. This function updates the status on the database, providing real-time information about the email's visibility.

## Getting Started

To start using MailCheck, follow these simple steps:

1. Clone the MailCheck repository.
2. Set up your Nhost account for backend services.
3. Configure the frontend with React for a personalized dashboard experience.
4. Embed the provided 1x1 transparent pixel in your emails for tracking.
5. Monitor your dashboard to stay informed about the status of your sent emails.

MailCheck simplifies the process of tracking email visibility while respecting user privacy. Experience the ease of knowing when your important messages have been seen. Try MailCheck today!
