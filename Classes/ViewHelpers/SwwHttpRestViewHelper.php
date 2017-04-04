<?php
namespace Gjz18\TmplGjz\ViewHelpers;

class SwwHttpRestViewHelper extends \TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper {
	
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