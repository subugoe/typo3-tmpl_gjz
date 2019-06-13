<?php

namespace Gjz18\TmplGjz\ViewHelpers;

use TYPO3Fluid\Fluid\Core\ViewHelper\AbstractViewHelper;

class LinkConditionGeneralViewHelper extends AbstractViewHelper {

	/**
	 * Registers own arguments.
	 */
	public function initializeArguments() {
		parent::initializeArguments();
		$this->registerArgument('array', 'array', 'The array to extract the values for 009P01s0 or 009P01sy from');
	}


	/**
	 * @return string
	 */
	public function render() {
		$array = NULL;
		$arrayAllArrays = NULL;
		$arrayAll = NULL;
		$valuesArray = NULL;
		$value = NULL;
		$text = NULL;

		if ($this->arguments['array']) {
			$array = $this->arguments['array'];
		}
		
		$artikelDigiTrue = "artikelDigi";
		$rezWerkDigiTrue = "rezWerkDigi";

		$arrayAllArrays = $array;

		foreach ($arrayAllArrays as $keyArr => $valuesArray) {
			if (is_array($valuesArray)) {
				foreach ($valuesArray as $keyVal => $value) {
					$arrayAll[] = $value;
				}
			} else {
				$arrayAll[] = $valuesArray;
			}
		}

		foreach ($arrayAll as $keySingle => $valueSingle) {
			$text = strtolower($valueSingle);
			if (((strpos($text, "artik") !== FALSE) AND (strpos($text, "digit") !== FALSE)) OR (strpos($text, "band") !== FALSE) OR (strpos($text, "illustra") !== FALSE)) {
				return $artikelDigiTrue;
			} elseif (((strpos($text, "rez") !== FALSE) OR (strpos($text, "ange") !== FALSE)) AND (strpos($text, "werk") !== FALSE) AND (strpos($text, "digi") !== FALSE) AND (strpos($text, "mit") === FALSE)) {
				return $rezWerkDigiTrue;
			} else {
				return;
			}
		}
		
	}
  
}
?>
