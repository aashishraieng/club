import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.png" alt="Logo" className="h-10 logo" />
          </div>

          {/* Navigation Buttons */}
          <div className="flex space-x-4">
            {(window.location.pathname !== "/")? (
              <>
                <Button variant="ghost" onClick={() => navigate("/")}>
		    <p style={{fontSize: '2em'}}>&larr;</p> Back
		</Button>
              </>
            ):(
            <>
              <Button variant="ghost" onClick={() => navigate("/members")}>Members</Button>
              <Button variant="ghost" onClick={() => navigate("/contact")}>Contact</Button>
              <Button variant="ghost" onClick={() => navigate("/join-club")}>Join</Button>
            </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
