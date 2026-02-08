import { View } from "react-native";
import { CenteredView } from "./component/CenteredView";
import { CustomButton } from "./component/CustomButton";
import Form from "./component/Form";
import ProductList from "./component/ProductList";
import "./global.css";

export default function Index() {
  return (
    <View className="flex-1">
      <CenteredView>
      <CustomButton title= "Primary" variant="primary" size="medium" onPress={() => alert("Primary Clicked")} />
      <CustomButton title= "Secondary" variant="secondary" size="large" onPress={() => alert("Secondary Clicked")} />
      <CustomButton title= "Danger" variant="danger" size="small" onPress={() => alert("Danger Clicked")} />
    </CenteredView>
    <ProductList />
    <Form />
    </View>
  );
}