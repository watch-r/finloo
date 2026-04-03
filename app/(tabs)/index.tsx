import "@/global.css";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNsafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNsafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <Text className="text-7xl font-bold font-sans-extrabold">Home!</Text>
      <Link
        className="mt-4 rounded bg-primary p-4 text-white"
        href="/onboarding"
      >
        Get Started
      </Link>
      <Link
        className="mt-4 rounded bg-primary p-4 text-white"
        href="/(auth)/sign-in"
      >
        Go to Sign In
      </Link>
      <Link
        className="mt-4 rounded bg-primary p-4 text-white"
        href="/(auth)/sign-up"
      >
        Go to Sign Up
      </Link>
    </SafeAreaView>
  );
}
