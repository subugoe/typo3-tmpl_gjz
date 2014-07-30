<?php

class Tx_Find_ViewHelpers_SwwHttpCheckViewHelper extends Tx_Fluid_Core_ViewHelper_AbstractViewHelper {
	 
	 /**
	 * Registers own arguments.
	 */
	public function initializeArguments() {
		parent::initializeArguments();
		$this->registerArgument('array', 'string', 'The array to extract the value from', TRUE);
	}


	/**
	 * @return string
	 */
	public function render() {
		$result = NULL;

		if ($this->arguments['array']) {
			$result = $this->arguments['array'];
		}
		
		$httpCheck = strpos($result, "\" [[http");
		
		if ( $httpCheck !== FALSE ) {
			$result = "httpTrue";
			return $result;
		}
		
		return;
		
    }
  
}
?>