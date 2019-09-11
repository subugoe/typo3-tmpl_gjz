<?php

namespace Gjz18\TmplGjz\ViewHelpers;

use TYPO3Fluid\Fluid\Core\ViewHelper\AbstractViewHelper;

class SwwHttpCheckViewHelper extends AbstractViewHelper {
	 
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

		if ( $this->arguments['array'] ) {
			$result = $this->arguments['array'];
		}

		if ( is_array($result) !== FALSE ) {
			$result = $result[0];
		}

		$httpCheck = strpos($result, "\" [[http");
		
		if ( $httpCheck !== FALSE ) {
			$result = "httpTrue";
			return $result;
		}
		else {
			return false;
		}
		
	}
	
}
?>
