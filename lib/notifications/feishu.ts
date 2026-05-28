
export async function sendFeishuNotification(message: string, webhookUrl: string) {
  const payload = {
    msg_type: "text",
    content: {
      text: message,
    },
  };

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Feishu notification failed: ${await response.text()}`);
  }
}
