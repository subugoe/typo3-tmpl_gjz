<?php
namespace Gjz18\TmplGjz\ViewHelpers;

class ProjectNameConditionViewHelper extends \TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper {

	/**
	 * Registers own arguments.
	 */
	public function initializeArguments() {
		parent::initializeArguments();
		$this->registerArgument('array', 'array', 'The array to extract the value from', TRUE);
		$this->registerArgument('key', 'string', 'The key to extract the value for', TRUE);
	}


	/**
	 * @return string
	 */
	public function render() {
		$result = NULL;

		if ($this->arguments['array']) {
			if (array_key_exists($this->arguments['key'], $this->arguments['array'])) {
				$result = $this->arguments['array'][$this->arguments['key']];
			}
		}
		
		$result = strtolower($result);
		
		if ( (strpos($result, "idz") !== FALSE) ) {
			$imageName = "Index deutschsprachiger Zeitschriften (IdZ 18, 1975-1986)";
			return $imageName;
		}
		elseif ( (strpos($result, "idrz") !== FALSE) ) {
			$imageName = "Index deutschsprachiger Rezensionszeitschriften (IdRZ 18, 1987-2007)";
			return $imageName;
		}
		elseif ( (strpos($result, "gjz") !== FALSE) ) {
			$imageName = "Gelehrte Journale und Zeitungen der Aufklärung (GJZ 18, seit 2011)";
			return $imageName;
		}
		
	}
  
}
?>