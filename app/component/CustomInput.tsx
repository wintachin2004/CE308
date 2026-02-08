import { Text, TextInput, View } from "react-native";

type CustomInputProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
};

export const CustomInput = ({
  label,
  value,
  onChangeText,
  placeholder,
}: CustomInputProps) => {
  return (
    <View className="mb-4 w-full">
      <Text className="mb-1 text-base font-medium">{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        className="border border-gray-300 rounded-md px-3 py-2 bg-white"
      />
    </View>
  );
};
