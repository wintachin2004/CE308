import { FlatList, View } from "react-native";
import { ItemCard, ProductItem } from './ItemCard';

const items : ProductItem[] = [
  {
    id: "1",
    productName: "Banana",
    price: 2000,
    pcs: 10,
    btnSize: "small",
    btnColor: "primary",
  },
  {
    id: "2",
    productName: "Mango",
    price: 2000,
    pcs: 10,
    btnSize: "medium",
    btnColor: "secondary",
  },
  {
    id: "3",
    productName: "Apple",
    price: 2000,
    pcs: 10,
    btnSize: "large",
    btnColor: "danger",
  },
];

export default function ProductListScreen() {
  return (
    <View className="flex-1 bg-gray-100 p-4">
      <FlatList<ProductItem>
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ItemCard item={item}  />}
      />
    </View>
  );
}