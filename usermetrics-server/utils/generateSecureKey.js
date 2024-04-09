import random from "random";

const generateSecureKey = () => {
    const alphabet = "AaBbCcDdEeFfJjGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890!?";
    const bottomBound = 10;
    const topBound = 15;

    let name = "";
    let length = random.int(bottomBound, topBound);

    for (let i = 0; i < length; i++) {
        name += random.choice(alphabet.split(""));
    }

    return name;
}


export default generateSecureKey;