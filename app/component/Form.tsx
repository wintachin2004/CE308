import { useState } from "react";
import { Alert, View } from "react-native";
import { CustomButton } from "./CustomButton";
import { CustomInput } from "./CustomInput";
export default function Form() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [pcs, setPcs] = useState("");

  const handleSubmit = () => {
    Alert.alert(
      "ข้อมูลสินค้า",
      `ชื่อสินค้า: ${productName}\nราคา: ${price}\nจำนวน: ${pcs}`
    );
  };

  return (
    <View className="flex-1 bg-gray-100 p-4">
      <CustomInput
        label="ชื่อสินค้า"
        value={productName}
        onChangeText={setProductName}
        placeholder="กรอกชื่อสินค้า"
      />

      <CustomInput
        label="ราคา"
        value={price}
        onChangeText={setPrice}
        placeholder="กรอกราคา"
      />

      <CustomInput
        label="จำนวน"
        value={pcs}
        onChangeText={setPcs}
        placeholder="กรอกจำนวน"
      />

      <CustomButton
        title="ยืนยัน"
        variant="primary"
        size="medium"
        onPress={handleSubmit}
      />
    </View>
  );
}
