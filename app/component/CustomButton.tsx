import { Text, TouchableOpacity } from "react-native";

type ButtonVariant = "primary" | "secondary" | "danger";
type ButtonSize = "small" | "medium" | "large";

type CustomButtonProps = {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export const CustomButton = ({
  title,
  onPress,
  variant = "primary",
  size = "medium",
}: CustomButtonProps) => {
  const variantClasses: Record<ButtonVariant, string> = {
    primary: "bg-blue-500",
    secondary: "bg-green-500",
    danger: "bg-red-500",
  };

  const sizeClasses: Record<ButtonSize, string> = {
    small: "px-3 py-1",
    medium: "px-4 py-2",
    large: "px-6 py-3",
  };

  const textSize: Record<ButtonSize, string> = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        rounded-lg
        active:bg-opacity-70
        mt-2
      `}
    >
      <Text className={`text-white font-semibold text-center ${textSize[size]}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};