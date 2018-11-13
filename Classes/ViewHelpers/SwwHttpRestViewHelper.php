<?php

namespace Gjz18\TmplGjz\ViewHelpers;

use TYPO3Fluid\Fluid\Core\ViewHelper\AbstractViewHelper;

class SwwHttpRestViewHelper extends AbstractViewHelper {
	
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

		if ( is_array($result) !== FALSE ) {
			$result = $result[0];
		}
		
		$httpEndPos = strpos($result, "]]");
		$httpRest = (string)substr($result, $httpEndPos+2);
		
		return $httpRest;
		
		}
	
}
?>
