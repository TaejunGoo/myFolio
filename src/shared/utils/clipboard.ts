import { toast } from "sonner";

const EMAIL = "gtxggle2@gmail.com";

export const copyEmailToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(EMAIL);
    toast.success("이메일이 복사되었습니다!", {
      description: EMAIL,
    });
  } catch (err) {
    console.error("Failed to copy email:", err);
    toast.error("이메일 복사에 실패했습니다.");
  }
};
