<?php

class Tx_Find_ViewHelpers_LinkConditionViewHelper extends Tx_Fluid_Core_ViewHelper_AbstractViewHelper {

	/**
	 * Registers own arguments.
	 */
	public function initializeArguments() {
		parent::initializeArguments();
		$this->registerArgument('array', 'array', 'The array to extract the value from', TRUE);
		$this->registerArgument('key', 'string', 'The key to extract the value for', TRUE);
	}


	/**
	 * @return string
	 */
	public function render() {
		$result = NULL;

		if ($this->arguments['array']) {
			if (array_key_exists($this->arguments['key'], $this->arguments['array'])) {
				$result = $this->arguments['array'][$this->arguments['key']];
			}
		}
		
		$artikelDigiTrue = "artikelDigi";
		$artikelDigiBandTrue = "artikelDigiBand";
		$artikelDigiIlluTrue = "artikelDigiIllu";
		$rezWerkTrue = "rezWerk";
		$rezWerkDigiTrue = "rezWerkDigi";
		$rezWerkPlusDigiTrue = "rezWerkPlusDigi";
		
		$text = $result;
		$text = strtolower($text);
		
		/*
		if ( ((strpos($text, "artik") !== FALSE) AND (strpos($text, "digit") !== FALSE)) OR (strpos($text, "band") !== FALSE) OR (strpos($text, "illustra") !== FALSE) ) {
			return $artikelDigiTrue;
		}
		*/
		
		if ( (strpos($text, "artik") !== FALSE) AND (strpos($text, "digit") !== FALSE) ) {
			return $artikelDigiTrue;
		}
		elseif ( strpos($text, "band") !== FALSE ) {
			return $artikelDigiBandTrue;
		}
		elseif ( strpos($text, "illustra") !== FALSE ) {
			return $artikelDigiIlluTrue;
		}
		
		elseif ( ((strpos($text, "rez") !== FALSE) OR (strpos($text, "ange") !== FALSE)) AND (strpos($text, "werk") !== FALSE) AND (strpos($text, "digi") === FALSE) ) {
			return $rezWerkTrue;
		}
		elseif ( ((strpos($text, "rez") !== FALSE) OR (strpos($text, "ange") !== FALSE)) AND (strpos($text, "werk") !== FALSE) AND (strpos($text, "digi") !== FALSE) AND (strpos($text, "mit") === FALSE) ) {
			return $rezWerkDigiTrue;
		}
		elseif ( ((strpos($text, "rez") !== FALSE) OR (strpos($text, "ange") !== FALSE)) AND (strpos($text, "werk") !== FALSE) AND (strpos($text, "digi") !== FALSE) AND (strpos($text, "mit") !== FALSE) ) {
			return $rezWerkPlusDigiTrue;
		}
		
	}
  
}
?>