import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAccount } from "wagmi";

const AuthOnlyLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { isConnected, isConnecting } = useAccount();
  const router = useRouter();

  useEffect(() => {
    if (!isConnected && !isConnecting) {
      router.replace("/home");
    }
  }, [isConnected]);

  if (!isConnected) {
    return null;
  }

  return <>{children}</>;
};

export default AuthOnlyLayout;
