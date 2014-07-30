<?php
namespace Gjz18\TmplGjz\ViewHelpers;

class SwwHttpLinkViewHelper extends \TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper {
	
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
		$httpLink = NULL;

		if ($this->arguments['array']) {
			$result = $this->arguments['array'];
		}
		
		$httpBeginPos = strpos($result, "\" [[http");
		$httpLinkStep = (string)substr($result, $httpBeginPos+4);
		$httpEndPos = strpos($httpLinkStep, "]]");
		$httpLink = (string)substr($httpLinkStep, 0, $httpEndPos);
		$httpLinkClean = str_replace(" ", "", $httpLink);
		
		return $httpLinkClean;
         
    }
  
}
?>