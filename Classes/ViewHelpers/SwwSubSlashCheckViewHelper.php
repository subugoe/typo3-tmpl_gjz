<?php

class Tx_Find_ViewHelpers_SwwSubSlashCheckViewHelper extends Tx_Fluid_Core_ViewHelper_AbstractViewHelper {
	
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
		
		if ( strpos($result, "/") == TRUE ) {
			return "subSlashTrue";
		}
		else return;
         
    }
  
}
?>