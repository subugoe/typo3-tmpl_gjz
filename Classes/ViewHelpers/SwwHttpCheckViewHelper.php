<?php
namespace Gjz18\TmplGjz\ViewHelpers;

class SwwHttpCheckViewHelper extends \TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper {
	 
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
      echo($result."->HttpTrue \n");
			$result = "httpTrue";
			return $result;
		}
		else {
			return false;
		}
		
	}
	
}
?>