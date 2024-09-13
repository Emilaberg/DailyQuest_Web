export default function mailResultTo( mailTo = "YourEmailHere@gmail.com", emailTitle = "DailyQuestResult", emailBody = "The Result Body") {
    const encodedTitle = encodeURIComponent(emailTitle || "");
    const encodedBody = encodeURIComponent(emailBody || "");
    const mailtoUrl = `mailto:${mailTo}?subject=${encodedTitle}&body=${encodedBody}`;
    window.open(mailtoUrl, '_blank');
}

