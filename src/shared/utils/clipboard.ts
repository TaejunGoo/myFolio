import { toast } from "sonner";

import { profile } from "@/data/profile";

export const copyEmailToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(profile.email);
    toast.success("이메일이 복사되었습니다!", {
      description: profile.email,
    });
  } catch (err) {
    console.error("Failed to copy email:", err);
    toast.error("이메일 복사에 실패했습니다.");
  }
};
