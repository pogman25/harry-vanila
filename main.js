import { PotterAPI } from "./scripts/potter.api";
import "./style.css";

const Potter = new PotterAPI();
Potter.getCharacters();
Potter.initSearch();
