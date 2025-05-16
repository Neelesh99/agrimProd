import cassiaOriginal from "../assets/original/cassia.jpg"
import cutter from "../assets/original/Cutter1.jpg"
import cassiaMix from "../assets/original/Cassia-Mix.jpg"
import cloves from "../assets/Cloves.png"
import nutmeg from "../assets/original/nutmegOnly.jpg"
import mace from "../assets/original/maceNew.jpg"
import blackPepper from "../assets/original/blackPepper.jpg"
import clovesStem from "../assets/original/cloveStem.jpg"
import whiteCardamom from "../assets/original/WhiteCardamom.jpg"
import longPepper from "../assets/original/LongPepper-1.jpg"
import tumericSlices from "../assets/original/turmericNew.jpeg"
import galangalSlices from "../assets/original/galangalNew.jpeg"
import dessicated from "../assets/original/dessicated.jpeg"
import water from "../assets/original/coconutWater.jpeg"
import milkCream from "../assets/original/coconut-milkcream.jpg"
import sugar from "../assets/original/cocosugar.jpg"
import oil from "../assets/original/Coconut_and_oil.jpg"
import flour from "../assets/original/coconut-flour-2bbbf1d.jpg"
import butter from "../assets/original/butter.jpeg"
import waterConcentrate from "../assets/original/cwc.jpeg"
import coffee from "../assets/original/coffee.jpg"
import { JSX } from "react"

export interface ProductData {
    description: JSX.Element,
    imageSrc: string,
    lowerGallery?: JSX.Element,
}

export function findProductData(productName: string): ProductData | undefined {
    if (productName === "cassia") {
        return cassiaDescription()
    }
    if (productName === "cloves") {
        return clovesDescription()
    }
    if (productName === "nutmeg") {
        return nutmegDescription()
    }
    if (productName === "blackPepper") {
        return blackPepperDescription()
    }
    if (productName === "mace") {
        return maceDescription()
    }
    if (productName === "clovesStem") {
        return clovesStemDescription()
    }
    if (productName === "whiteCardamom") {
        return whiteCardamomDescription()
    }
    if (productName === "longPepper") {
        return longPepperDescription()
    }
    if (productName === "turmericSlices") {
        return tumericSlicesDescription()
    }
    if (productName === "galangalSlices") {
        return galangalSlicesDescription()
    }
    if (productName === "desiccatedCoconut") {
        return dessicatedCoconut()
    }
    if (productName === "coconutWater") {
        return coconutWater()
    }
    if (productName === "coconutMilkCream") {
        return coconutMilk()
    }
    if (productName === "coconutSugar") {
        return coconutSugar()
    }
    if (productName === "virginCoconutOil") {
        return virginCoconutOil()
    }
    if (productName === "coconutFlour") {
        return coconutFlour()
    }
    if (productName === "coconutButter") {
        return coconutButter()
    }
    if (productName === "coconutWaterConcentrate") {
        return coconutWaterConcentrate()
    }       
    if (productName === "coffee") {
        return coffeeDescription()
    }
    return undefined
}

function cassiaElements() {
    return <div>
            A spice made from the bark of the Cinnamomum aromaticum tree.
            Cassia bark (both powdered and in whole, or "stick" form) is used as a flavouring agent for confectionery, desserts, pastries, and meat; it is specified in many curry recipes,
            where Ceylon cinnamon is less suitable. Cassia is sometimes added to Ceylon cinnamon, but is a much thicker,
            coarser product. Cassia is sold as pieces of bark (as pictured below) or as neat quills or sticks.
            Indonesian Cassia sticks can be distinguished from Ceylon cinnamon sticks in the following manner:
            Ceylon cinnamon sticks have many thin layers and can easily be made into powder using a coffee or
            spice grinder, whereas cassia sticks are extremely hard and are usually made up of one thick layer.
        <br/><br/>
        <h6 className="font-bold text-lg">Grades</h6>
        <ul>
            <li>Cassia Vera A and AA cut sticks , 6cm – 60cm</li>
            <li>Cassia A Long sticks</li>
            <li>Cassia Broken - KABC</li>
            <li>Cassia Broken - KBBC</li>
            <li>Cassia Kibbled - 3-8mm</li>
            <li>Cassia TBC (Tea Bag Cut)</li>
            <li>Cassia Granules below 1mm</li>
            <li>Ground Cassia (Variable Mesh Size & Oil content)</li>
        </ul>
    </div>
}

function cassiaLowerGallery() {
    return <div className="flex flex-row space-x-4">
        <img src={cassiaOriginal} className="h-64 rounded-2xl"/>
        <img src={cutter} className="h-64 rounded-2xl"/>
    </div>
}

function cassiaDescription() : ProductData {
    return {
        description: cassiaElements(),
        imageSrc: cassiaMix,
        lowerGallery: cassiaLowerGallery()
    }
}

function clovesDescription() {
    return {
        description: <div>Cloves are the aromatic, dried flower buds of a tree. They are native to the Maluku Islands in Indonesia and used as a spice in many cuisines all over the world. Cloves are harvested primarily in Indonesia, Madagascar, Zanzibar, Comoros, and Sri Lanka. They are used in Indian Ayurvedic medicine, Chinese medicine, and western herbalism, and dentistry, where the essential oil is used as an anodyne (painkiller) for dental emergencies.</div>,
        imageSrc: cloves
    }
}

function nutmegDescription() {
    return {
        description: <div>Nutmeg is the actual seed of the tree, roughly egg-shaped and about 20 mm to 30 mm (1 inch) long and 15 mm to 18 mm (¾ inch) wide, and weighing between 5 g and 10 g (¼ ounce and ½ ounce) dried, while mace is the dried "lacy" reddish covering or arillus of the seed.</div>,
        imageSrc: nutmeg
    }
}

function maceDescription() {
    return {
        description: <div>Mace - The nutmeg tree, Myristica fragrans, is special in that it produces two separate spices, nutmeg and Mace. Mace is the ground outer covering (aril) of the nutmeg seed. A piece of unground Mace is called a blade. In its natural state, mace is a bright crimson lace up to 35 mm (1-1/2 in) long, encasing the brown nutmeg in irregular, fleshy lobes. As it is dried, it develops its characteristic aroma but loses its bright red color. The mace can become brittle and horny, though the best quality mace will retain some pliability and release a little oil when squeezed. It grows in Indonesia (Siaw-Ambon and Papua Islands).</div>,
        imageSrc: mace
    }
}

function blackPepperDescription() {
    return {
        description: <div>Black Pepper is the dried berry of Piper nigrum. This vine, which can grow up to ten feet tall, is indigenous to India and Southeast Asia. Pepper are actually berries that are picked about nine months after flowering. Black Pepper, the spiciest, is made from berries that are picked unripe. The berries used for White Pepper are ripened on the vine and soaked so that their outer hulls are easily removed. Green Peppercorns are immature berries that are freeze dried or packed in brine for preservation. Pepper is grown in India, Indonesia, Vietnam, Malaysia, and Brazil.</div>,
        imageSrc: blackPepper
    }
}

function clovesStemDescription() {
    return {
        description: <div>Clove Stem - the stems of cloves collected after picking buds from the trees. It has natural oil, which is extracted and used for medicinal, pharmaceutical, and cosmetic purposes. Clove stem is also used with clove buds for grinding into powder to be used as spices and mixed curry. Clove stems are processed and hand cleaned from any foreign matter and leaves, and then sun dried before packing in PP bags.</div>,
        imageSrc: clovesStem
    }
}

function whiteCardamomDescription() {
    return {
        description: <div>White cardamom found in Indonesia, is a variety distinct from the more common green cardamom. It has a pale, cream-colored shell and smaller seeds with a mild, slightly sweet, and earthy flavor. This type of cardamom is widely used in Indonesian cuisine, traditional medicine, and herbal remedies. It is often added to soups, stews, and spice blends like bumbu to enhance aroma and taste. Compared to green cardamom, Indonesian white cardamom has a subtler fragrance and is less pungent.</div>,
        imageSrc: whiteCardamom
    }
}

function longPepperDescription() {
    return {
        description: <div>Long Pepper - The tiny berries, which merge into a single, rod-like structure, bear some resemblance to catkins (flowers of trees like hazelnut or willow). It tastes hot and warm, with sweet overtones. The species Piper longum is of South Asian origin and is mostly cultivated in Indonesia (Madura, Java) and Thailand.</div>,
        imageSrc: longPepper
    }
}

function tumericSlicesDescription() {
    return {
        description: <div>Turmeric is the dried root of the plant Curcuma longa. Noted for its bright yellow color, it is related to and similar in size to ginger. Turmeric has been used in Asia for thousands of years and is a major part of Ayurvedic medicine. It was first used as a dye, and then later for its medicinal properties. We offer Indonesian Turmeric Slices that are known for their high quality and high Curcuma content. These slices are well dried with a high curcumin percentage, which is responsible for the bright yellow color that is used as a yellow food colorant and food additive.</div>,
        imageSrc: tumericSlices
    }
}

function galangalSlicesDescription() {
    return {
        description: <div>At first, galangal or 'Khaa' in Thai, appears similar to ginger. However, a closer look will reveal the difference between galangal and ginger. Galangal has a tighter skin, is lighter in color, and can have pinkish portions too. Galangal tastes more like pepper than ginger, even though both grow underground as roots, and the method used to cook them (in various dishes) is similar too. The galangal that originated in Indonesia is also called, lengkuas and has a sharp flavour and pine like aroma. This is more commonly found in fresh or dried (powder) form. The second type of galangal, has a pungent flavour and tastes like a combination of pepper and ginger. It is commonly used as a seasoning ingredient in Thai food and many seafood, meat, and curry dishes.</div>,
        imageSrc: galangalSlices
    }
}

function dessicatedCoconut() {
    return {
        description: <div>Desiccated coconut is dried, shredded coconut meat that retains the rich flavor
            and texture of fresh coconut. It's commonly used in baking, cooking, and as a topping for various dishes, offering a sweet, nutty taste and a chewy texture. It's available in various forms, such as finely shredded or coarsely chopped.
            <p></p>
            <div className="font-bold">Benefits</div>
            Desiccated coconut is rich in healthy fats, fiber, and essential minerals like iron and
            magnesium. It supports heart health, digestion, and provides a natural energy boost. Additionally, it's a good source of antioxidants and can be a versatile addition to various recipes.
        </div>,
        imageSrc: dessicated
    }
}

function coconutWater() {
    return {
        description: <div>UHT (Ultra-High Temperature) coconut water is coconut water that has been
            heated to a high temperature for a brief period to kill harmful bacteria and extend shelf life without the need for preservatives. It retains most of the natural flavor and nutrients of fresh coconut water, offering a convenient, long-lasting, and refreshing drink that is rich in electrolytes, potassium, and hydration.
            <p></p>
            <div className="font-bold">Benefits</div>
                UHT coconut water hydrates, replenishes electrolytes, and is low in calories. It's rich in
            vitamins, minerals, and antioxidants, supporting heart health and digestion, while offering the convenience of a long shelf life.
            <p></p>
            <div className="font-bold">Packaging</div>
                BIB (20kg) or Drum (225kg)
        </div>,
        imageSrc: water
    }
}

function coconutMilk() {
    return {
        description: <div>Coconut milk and coconut cream are both made from the flesh of mature
            coconuts but differ in consistency and fat content. Coconut milk is a thin, creamy liquid produced by blending grated coconut flesh with water, commonly used in cooking and beverages. Coconut cream, on the other hand, is a richer, thicker version with a higher fat content, often used in desserts, sauces, or as a dairy substitute in rich dishes. Both provide a subtle coconut flavour, adding richness to recipes.
            <p></p>
            <div className="font-bold">Benefits</div>
            Coconut milk and cream are rich in healthy fats, which can boost metabolism and
            provide energy. They're great dairy-free alternatives, support heart health, and are packed with vitamins and minerals. Additionally, they help boost immunity, promote skin health, and aid digestion.
        </div>,
        imageSrc: milkCream
    }
}

function coconutSugar() {
    return {
        description: <div>Coconut Sugar is natural sugar made from the coconut palm tree sap's sugary fluid. The sap is placed at very high heat until water is evaporated and left with sugar granules. It is then sieved with different mesh sizes and packed.

            <p></p>
            <div className="font-bold">Benefits</div>
            Coconut sugar is a natural sweetener with a low glycemic index, helping regulate blood sugar levels. It contains minerals like potassium, iron, and zinc, along with antioxidants for overall health.
        </div>,
        imageSrc: sugar
    }
}

function virginCoconutOil() {
    return {
        description: <div>Virgin coconut oil is made from fresh, raw coconut meat through a cold-
            pressing process, preserving its natural flavor, nutrients, and aroma. It's unrefined and free from chemicals, making it a popular choice for cooking, skincare, and haircare due to its health benefits and versatility.

            <p></p>
            <div className="font-bold">Benefits</div>
            Virgin coconut oil is rich in healthy fats, antioxidants, and antimicrobial properties. It
            supports heart health, boosts immunity, moisturizes skin, and promotes hair health. It can also aid digestion and provide a quick energy source.

            <p></p>
            <div className="font-bold">Packaging</div>
            BIB (20kg) or Drum (200kg)
        </div>,
        imageSrc: oil
    }
}

function coconutFlour() {
    return {
        description: <div>Coconut flour is a gluten-free, high-fiber flour made from dried and finely
            ground coconut meat. It has a mild coconut flavor and is commonly used in baking, especially for gluten-free and low-carb recipes. It absorbs more liquid than regular flour, so recipes may require adjustments.

            <p></p>
            <div className="font-bold">Benefits</div>
            Coconut flour is high in fiber, gluten-free, and low in carbohydrates, making it ideal for
            digestive health and weight management. It’s also rich in healthy fats and proteins, supporting energy and muscle health.

            <p></p>
            <div className="font-bold">Packaging</div>
            Bag 10kg or 25kg
        </div>,
        imageSrc: flour
    }
}

function coconutButter() {
    return {
        description: <div>Coconut butter is made from pureed coconut meat, offering a creamy texture
            with both the oil and fiber of the coconut. It has a rich, nutty flavor and is often used as a spread, in baking, or as a dairy-free alternative in various recipes.

            <p></p>
            <div className="font-bold">Benefits</div>
            Coconut butter is rich in healthy fats, fiber, and antioxidants. It supports heart health,
            digestion, and provides sustained energy. It also nourishes the skin and can be used as a natural moisturizer.

            <p></p>
            <div className="font-bold">Packaging</div>
            BIB 20 Kg
        </div>,
        imageSrc: butter
    }
}

function coconutWaterConcentrate() {
    return {
        description: <div>Coconut Water Concentrate is a processed form of coconut water where the water content is reduced to increase its shelf life and make transportation more efficient. It retains the natural electrolytes, minerals, and flavor of fresh coconut water but in a more concentrated form.

            <p></p>
            <p></p>
            <div className="font-bold">Benefits</div>
            Coconut water concentrate is rich in electrolytes, vitamins, and antioxidants, promoting hydration, heart health, and digestion. It’s a natural energy booster, supports metabolism, and enhances skin and hair health.
        </div>,
        imageSrc: waterConcentrate
    }
}

function coffeeDescription() {
    return {
        description: 
        <div>
            Robusta coffee beans are sourced from the lush, volcanic regions of Indonesia, our premium Robusta coffee beans are known for their bold flavor, rich aroma, and high caffeine content. Grown at lower altitudes and carefully sun-dried, these beans offer a deep, earthy profile with notes of dark chocolate and a hint of spice—perfect for strong espresso blends or a robust cup of coffee.
            <p></p>
            <div className="font-bold">Benefits</div>
            High caffeine content for a strong energy boost<br/>
            Rich, bold flavor ideal for espresso and dark roasts<br/>
            Naturally resistant to pests and disease, promoting sustainable farming<br/>
            Lower acidity for a smoother taste and gentler on the stomach

        </div>,
        imageSrc: coffee
    }
}