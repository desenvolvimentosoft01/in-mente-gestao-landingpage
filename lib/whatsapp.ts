export const WHATSAPP_NUMERO = "5518998048714";
export const WHATSAPP_MENSAGEM_PADRAO =
  "Olá! Quero saber mais sobre o sistema In Mente Gestão.";

export function linkWhatsapp(mensagem: string = WHATSAPP_MENSAGEM_PADRAO) {
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`;
}
