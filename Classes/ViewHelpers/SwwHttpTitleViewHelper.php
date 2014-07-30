<?php

class Tx_Find_ViewHelpers_SwwHttpTitleViewHelper extends Tx_Fluid_Core_ViewHelper_AbstractViewHelper {
	
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
		
		$httpBeginPos = strpos($result, "\" [[http");
		$titleBeginPos = strpos($result, "/\"");
		$httpTitlePt = (string)substr($result, 0, $httpBeginPos+1);
		$httpTitle = (string)substr($httpTitlePt, $titleBeginPos);
		
		$firstChar = (string)substr($httpTitle, 0, 1);
		if ( $firstChar == "/" ) {
			$httpTitle = (string)substr($httpTitle, 1);
		}
		if ( $firstChar == " " ) {
			$httpTitle = (string)substr($httpTitle, 1);
		}
		
		return $httpTitle;
         
    }
  
}
?>