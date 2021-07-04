import prompt from "./prompt.ts";
import { compare, search } from "./lib.ts";
import { ASCII } from "./ascii.ts";

(async () => {
  console.log(ASCII.pokedex);
  console.log(`
Options:
1) 👀 search
2) ⚖️ compare
`);
  const selectedOption = await prompt("Select option number");
  if (selectedOption === "1") {
    const _name = await prompt("Enter pokemon name");
    console.log(await search(_name));
    return;
  }

  if (selectedOption === "2") {
    const _nameA = await prompt("Enter first pokemon name");
    const _nameB = await prompt("Enter second pokemon name");
    const searchResultA = await search(_nameA);
    const searchResultB = await search(_nameB);
    compare(searchResultA, searchResultB);
    return;
  }

  throw new Error("not a valid option");
})();
