import "./style.css";
import { getCharacters } from "./scripts/potter.api.js";

document.querySelector("#potter-api").addEventListener("click", getCharacters);
