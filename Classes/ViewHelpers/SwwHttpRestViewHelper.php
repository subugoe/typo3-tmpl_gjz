<?php

class Tx_Find_ViewHelpers_SwwHttpRestViewHelper extends Tx_Fluid_Core_ViewHelper_AbstractViewHelper {
	
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
		$httpTitle = NULL;

		if ($this->arguments['array']) {
			$result = $this->arguments['array'];
		}
		
		$httpEndPos = strpos($result, "]]");
		$httpRest = (string)substr($result, $httpEndPos+2);
		
		return $httpRest;
         
    }
  
}
?>