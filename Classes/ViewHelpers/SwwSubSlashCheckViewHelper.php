<?php

namespace Gjz18\TmplGjz\ViewHelpers;

use TYPO3Fluid\Fluid\Core\ViewHelper\AbstractViewHelper;

class SwwSubSlashCheckViewHelper extends AbstractViewHelper {
	
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
