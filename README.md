# LC3 Assembly Extension

Basic syntax highlighting and snippets for the LC3 assembly language used by the
 UT ECE department for educational purposes. I made this because looking at dull
white on dark grey text was making me go blind.

Recommended themes/tools:

[IBM Dark (also by me)](https://marketplace.visualstudio.com/itemsitemName=PaperFanz.ibm-color-palette-color-scheme)

[LASER](https://github.com/PaperFanz/laser) - a command-line-based assembler 
that supports multi-file assembly, register renaming, and verbosity 
settings.

## Features

Syntax hihglighting for different types of operations. Registers are also bolded
 and highlighted (So you know whether you've typed R0 or RO).

Snippet support for all LC3 opcodes excluding RTI (because you don't need a 
snippet to type RTI), including different addressing modes where appropriate.

## Usage

After installing the extension via the extension marketplace and reloading the 
active window to activate it, just begin typing your code. The VSCode suggestion
 window will pop up and you can use the arrow keys to select an option or keep 
typing to further refine the suggestions. Press tab to cycle through the 
highlighted default spaces, and type in your registers, immediate values, 
offsets, labels, etc.

![lc3asm](images/lc3asm.gif)

## Requirements

VSCode 1.18.0 or up.

## Known Issues

## Changelog

See [CHANGELOG.md](CHANGELOG.md)

**Enjoy!**
