<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreSubmissionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'firstName' => ['required', 'string', 'max:120'],
            'lastName'  => ['required', 'string', 'max:120'],
            'email'     => ['required', 'email:rfc,dns', 'max:255'],
            'phone'     => ['required', 'string', 'max:40'],
            'message'   => ['required', 'string', 'max:20000'],
        ];
    }


    public function prepareForValidation()
    {
        $this->merge([
            'first_name' => $this->firstName,
            'last_name'  => $this->lastName,
        ]);
    }
}
