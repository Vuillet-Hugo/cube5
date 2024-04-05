import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { ChevronsUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollButton(window.pageYOffset > 0);
    };

    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showScrollButton && (
      <Button
        onClick={scrollToTop}
        variant={"outline"}
        className="fixed bottom-10 right-10 bg-primary-foreground opacity-70 hover:opacity-100 hover:bg-primary-foreground rounded-full"
      >
        <ChevronsUp size={24} />
      </Button>
    )
  );
}
