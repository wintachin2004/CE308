import { Text, View } from "react-native";
import { CustomButton } from "./CustomButton";

export type ProductItem = {
  id: string;
  productName: string;
  price: number;
  pcs: number;
  btnSize: "small" | "medium" | "large";
  btnColor: "primary" | "secondary" | "danger";
};

type ItemCardProps = {
  item: ProductItem;
};

export const ItemCard = ({ item }: ItemCardProps) => {
  return (
    <View className="bg-gray-200 rounded-xl p-4 mb-4">
      <Text className="text-[2.25rem] font-bold mb-2">
        ชื่อสินค้า: {item.productName}
      </Text>

      <Text className="text-base">ราคา: {item.price}</Text>
      <Text className="text-base">จำนวน: {item.pcs} PCS</Text>

      <CustomButton
        title="สั่งซื้อ"
        size={item.btnSize}
        variant={item.btnColor}
        onPress={() =>
          console.log(`สั่งซื้อสินค้า: ${item.productName}`)
        }
      />
    </View>
  );
};