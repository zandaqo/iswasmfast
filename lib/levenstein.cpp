#include <string>
#include <array>

using namespace std;


unsigned int levenstein(const string& word, const string& reference) {
	const size_t len1 = word.size();
	const size_t len2 = reference.size();

	array<unsigned int, 50> col;
	array<unsigned int, 50> prevCol;

	for (unsigned int i = 0; i < 50; i++)
		prevCol[i] = i;
	for (unsigned int i = 0; i < len1; i++) {
		col[0] = i + 1;
		for (unsigned int j = 0; j < len2; j++) {
			col[j + 1] = min(min(prevCol[1 + j] + 1, col[j] + 1), prevCol[j] + (word[i] == reference[j] ? 0 : 1));
		}
		col.swap(prevCol);
	}
	return prevCol[len2];
}