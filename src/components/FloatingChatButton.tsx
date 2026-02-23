import { MessageCircle } from "lucide-react";

const FloatingChatButton = () => (
  <a
    href="https://wa.me/989153750234"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-foreground text-background shadow-float flex flex-col items-center justify-center hover:scale-105 transition-transform duration-200"
    aria-label="چت با ما"
  >
    <MessageCircle className="w-6 h-6" />
    <span className="text-[0.5rem] font-medium mt-0.5">بپُرس</span>
  </a>
);

export default FloatingChatButton;
