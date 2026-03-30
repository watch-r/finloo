import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
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
    </View>
  );
}
