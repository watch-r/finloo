import { Link } from "expo-router";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  return (
    <SafeAreaView>
      <Text>SignIn</Text>
      <Link href="/(auth)/sign-up">Don&apos;t have an account? Sign Up</Link>
      <Link href="/">Go Home</Link>
    </SafeAreaView>
  );
};

export default SignIn;
