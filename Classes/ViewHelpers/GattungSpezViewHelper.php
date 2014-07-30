<?php

class Tx_Find_ViewHelpers_GattungSpezViewHelper extends Tx_Fluid_Core_ViewHelper_AbstractViewHelper {

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
		
		
		$spez = $result;
		
		if ( strpos($spez, "Fachspezifikation") !== FALSE ) {
			return "Fachspezifikation";
		}
		elseif ( strpos($spez, "Fakult") !== FALSE ) {
			return "Fakult";
		}
		elseif ( strpos($spez, "Werkformspezifikation") !== FALSE ) {
			return "Werkformspezifikation";
		}
		
	}
  
}
?>