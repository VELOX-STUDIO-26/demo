import requests
import json

# Resend API configuration
RESEND_API_KEY = "re_ESqWCked_EY8zuRKafhiGbzFNdMnas5f6"
FROM_EMAIL = "AI METRIX <noreply@aimetrixllc.com>"
TO_EMAIL = "info@aimetrixllc.com"

# Test email content
payload = {
    "from": FROM_EMAIL,
    "to": [TO_EMAIL],
    "subject": "Test Email from Contact Form",
    "html": """
    <h2>Test Email</h2>
    <p>This is a test email to verify the contact form is working correctly.</p>
    <p><strong>Name:</strong> Test User</p>
    <p><strong>Email:</strong> test@example.com</p>
    <p><strong>Message:</strong> This is a test message.</p>
    """,
    "reply_to": "test@example.com"
}

try:
    response = requests.post(
        "https://api.resend.com/emails",
        headers={
            "Authorization": f"Bearer {RESEND_API_KEY}",
            "Content-Type": "application/json"
        },
        json=payload
    )

    if response.status_code == 200:
        print("✅ Email sent successfully!")
        print(f"Email ID: {response.json().get('id')}")
    else:
        print(f"❌ Failed to send email. Status: {response.status_code}")
        print(f"Response: {response.text}")

except Exception as e:
    print(f"❌ Error: {str(e)}")
