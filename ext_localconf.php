<?php

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT:source="FILE:EXT:tmpl_gjz/Configuration/PageTS/pageTsConfig.typoscript">');

$GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['gjzpreset'] = 'EXT:tmpl_gjz/Configuration/RTE/GjzPreset.yaml';
