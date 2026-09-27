import { STRIPE_TEST_KEY } from "@/config/StripeKeys"
import { Button, StyleSheet, View } from "react-native"

export const StripeLogin = () => {

    const loginStripe = async () => {

        const response = await fetch("https://api.stripe.com/v1/charges", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${STRIPE_TEST_KEY}`,
            }
        })

        const json = response.json()
        console.log("response", json)
    }


    
    return (
        <View style={styles.container}>
            <Button  color="#841584" title="FETCH STIPE CHARGES" onPress={loginStripe}/>
        </View>
    )


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    button: {
        height: 40,
        width: 135
    }
})