export async function sendWhatsAppNotification(email: string) {
  const phone = process.env.NEXT_PUBLIC_FONNTE_PHONE;
  const token = process.env.NEXT_PUBLIC_FONNTE_TOKEN;

  const formData = new FormData();
  formData.append("target", phone || "");
  formData.append("message", `New contact form Submission:\nEmail: ${email}`);

  try {
    await fetch("https://api.fonnte.com/send", {
      method: "POST",
      headers: {
        Authorization: token || "",
      },
      body: formData,
    });
  } catch (error) {
    console.error("Gagal kirim WA:", error);
  }
}
