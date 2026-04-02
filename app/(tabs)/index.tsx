import "@/global.css";
import { Link } from "expo-router";
import { Text } from "react-native";
import { styled } from "nativewind";
import { SafeAreaView as RNsafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNsafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
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
      <Link
        className="mt-4 rounded bg-primary p-4 text-white"
        href="/subscriptions/spotify"
      >
        Go to Spotify Subscription
      </Link>
      <Link
        className="mt-4 rounded bg-primary p-4 text-white"
        href={{
          pathname: "/subscriptions/[id]",
          params: { id: "12345" },
        }}
      >
        Go to Subscription Details
      </Link>
    </SafeAreaView>
  );
}
