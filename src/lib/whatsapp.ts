export const VELMO_WHATSAPP_NUMBER = "5585992099701";
export const VELMO_WHATSAPP_DISPLAY = "(85) 99209-9701";

export const VELMO_STANDARD_MESSAGE =
  "Olá! Estava no site oficial da Velmo Black e gostaria de receber um atendimento exclusivo para conhecer melhor os produtos, tirar algumas dúvidas e conferir os kits disponíveis. Pode me ajudar? ✨";

export function getWhatsAppUrl(message: string = VELMO_STANDARD_MESSAGE): string {
  return `https://wa.me/${VELMO_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
