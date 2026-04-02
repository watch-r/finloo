import { Link } from "expo-router";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {
  return (
    <SafeAreaView>
      <Text>SignUp</Text>
      <Link href="/(auth)/sign-in">Already have an account? Sign In</Link>
    </SafeAreaView>
  );
};

export default SignUp;
