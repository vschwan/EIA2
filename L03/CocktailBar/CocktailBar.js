"use strict";
// namespace L03_CocktailBar {
//     window.addEventListener("load", handleLoad);
//     function handleLoad(_event: Event): void {
//         console.log("Start");
//         let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#form");
//         let slider: HTMLInputElement = <HTMLInputElement>document.querySelector("input#amount");
//         form.addEventListener("change", handleChange);
//         slider.addEventListener("input", displayAmount);
//     }
//     function handleChange(_event: Event): void {
//         // console.log(_event);
//         // let drink: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select");
//         // console.log(drink.value);
//         // let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
//         // console.log(inputs);
//         let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order");
//         order.innerHTML = "";
//         let formData: FormData = new FormData(document.forms[0]);
//         for (let entry of formData) {
//             //console.log(entry);
//             let amount: number = Number(formData.get("Amount"));
//             console.log(amount);
//             let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[1] + "']");
//             let price: number = Number(item.getAttribute("price"));
//             console.log(price);
//             let total: number = 0;
//             let totalSum: number = 0;
//             if (item.classList.contains("drinks")) {
//                 total = price * amount;
//                 //  console.log(total = price, amount);
//                 order.innerHTML += entry[1] + ": " + amount + " L" + " = " + total + " Euro" + "<br>";
//                 totalSum += total;
//             } else {
//                 console.log("test");
//                 order.innerHTML += entry[1] + " " + price + " Euro" + "<br>";
//                 totalSum += price;
//             }
//         }
//     }
//     function displayAmount(_event: Event): void {
//         let progress: HTMLProgressElement = <HTMLProgressElement>document.querySelector("progress");
//         let amount: string = (<HTMLInputElement>_event.target).value;
//         progress.value = parseFloat(amount);
//     }
// }
//# sourceMappingURL=CocktailBar.js.map